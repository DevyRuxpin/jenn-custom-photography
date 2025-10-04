import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  X, 
  Image as ImageIcon, 
  AlertCircle, 
  CheckCircle,
  RotateCcw,
  Download,
  Eye,
  Trash2,
  Plus
} from 'lucide-react';

interface UploadedFile {
  id: string;
  file: File;
  preview: string;
  status: 'uploading' | 'success' | 'error';
  progress?: number;
  error?: string;
}

interface PhotoUploadProps {
  onFilesChange: (files: UploadedFile[]) => void;
  maxFiles?: number;
  maxFileSize?: number; // in MB
  acceptedTypes?: string[];
  className?: string;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({
  onFilesChange,
  maxFiles = 10,
  maxFileSize = 10,
  acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  className = ''
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Validate file
  const validateFile = (file: File): string | null => {
    if (!acceptedTypes.includes(file.type)) {
      return `File type ${file.type} is not supported. Please upload JPEG, PNG, or WebP images.`;
    }
    if (file.size > maxFileSize * 1024 * 1024) {
      return `File size must be less than ${maxFileSize}MB.`;
    }
    return null;
  };

  // Add files
  const addFiles = useCallback((newFiles: File[]) => {
    const validFiles: UploadedFile[] = [];
    
    newFiles.forEach((file) => {
      const error = validateFile(file);
      if (error) {
        validFiles.push({
          id: Math.random().toString(36).substr(2, 9),
          file,
          preview: URL.createObjectURL(file),
          status: 'error',
          error
        });
      } else if (uploadedFiles.length + validFiles.length < maxFiles) {
        validFiles.push({
          id: Math.random().toString(36).substr(2, 9),
          file,
          preview: URL.createObjectURL(file),
          status: 'success'
        });
      }
    });

    if (validFiles.length > 0) {
      const updatedFiles = [...uploadedFiles, ...validFiles];
      setUploadedFiles(updatedFiles);
      onFilesChange(updatedFiles);
    }
  }, [uploadedFiles, maxFiles, maxFileSize, acceptedTypes, onFilesChange]);

  // Handle file input change
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    addFiles(files);
  };

  // Handle drag and drop
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    addFiles(files);
  }, [addFiles]);

  // Remove file
  const removeFile = (id: string) => {
    const updatedFiles = uploadedFiles.filter(file => {
      if (file.id === id) {
        URL.revokeObjectURL(file.preview);
      }
      return file.id !== id;
    });
    setUploadedFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  // Rotate image
  const rotateImage = (id: string) => {
    // This would need canvas manipulation for actual rotation
    // For now, just show a placeholder
    console.log('Rotate image:', id);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
          dragActive
            ? 'border-primary-500 bg-primary-50'
            : 'border-slate-300 hover:border-slate-400'
        } ${uploadedFiles.length >= maxFiles ? 'opacity-50 pointer-events-none' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedTypes.join(',')}
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className={`p-4 rounded-full ${dragActive ? 'bg-primary-100' : 'bg-slate-100'}`}>
              <Upload className={`h-8 w-8 ${dragActive ? 'text-primary-600' : 'text-slate-600'}`} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Upload Your Photos
            </h3>
            <p className="text-slate-600 mb-4">
              Drag and drop your images here, or click to browse
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="btn-primary"
            >
              Choose Files
            </button>
          </div>
          
          <div className="text-sm text-slate-500 space-y-1">
            <p>Supported formats: JPEG, PNG, WebP</p>
            <p>Max file size: {maxFileSize}MB</p>
            <p>Max files: {maxFiles}</p>
            <p>Current: {uploadedFiles.length}/{maxFiles}</p>
          </div>
        </div>
      </div>

      {/* Uploaded Files */}
      <AnimatePresence>
        {uploadedFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-slate-900">
              Uploaded Photos ({uploadedFiles.length})
            </h4>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {uploadedFiles.map((file) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative group"
                >
                  <div className="aspect-square rounded-lg overflow-hidden bg-slate-100 relative">
                    <img
                      src={file.preview}
                      alt={file.file.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Status Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => rotateImage(file.id)}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                          title="Rotate"
                        >
                          <RotateCcw className="h-4 w-4 text-white" />
                        </button>
                        <button
                          onClick={() => window.open(file.preview, '_blank')}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                          title="View Full Size"
                        >
                          <Eye className="h-4 w-4 text-white" />
                        </button>
                        <button
                          onClick={() => removeFile(file.id)}
                          className="p-2 bg-red-500/20 backdrop-blur-sm rounded-lg hover:bg-red-500/30 transition-colors"
                          title="Remove"
                        >
                          <Trash2 className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="absolute top-2 right-2">
                      {file.status === 'success' && (
                        <div className="p-1 bg-green-500 rounded-full">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      )}
                      {file.status === 'error' && (
                        <div className="p-1 bg-red-500 rounded-full">
                          <AlertCircle className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* File Info */}
                  <div className="mt-2 space-y-1">
                    <p className="text-sm font-medium text-slate-900 truncate">
                      {file.file.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {(file.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                    {file.error && (
                      <p className="text-xs text-red-600">
                        {file.error}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Add More Button */}
            {uploadedFiles.length < maxFiles && (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center space-x-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <Plus className="h-4 w-4 text-slate-600" />
                <span className="text-slate-600">Add More Photos</span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoUpload;
