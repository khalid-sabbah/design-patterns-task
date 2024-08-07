import React from 'react';
import { Button } from 'primereact/button';
import { ToastContainer } from './ToastContainer';
import { useToast } from '../../contexts/ToastContext';

const Toast: React.FC = () => {
  const { addToast, dismissAll } = useToast();

  return (
    <div className="p-4 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
      <div className="mb-4 p-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        <h1 className="text-lg font-semibold text-gray-800">Toast Library</h1>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button 
          label="Default" 
          size="small" 
          onClick={() => addToast('default', 'default toast.')} 
          className="transition duration-300 ease-in-out hover:bg-gray-100"
        />
        <Button 
          icon="pi pi-check" 
          label="Success" 
          size="small" 
          severity="success" 
          onClick={() => addToast('success', 'success toast.')} 
          className="transition duration-300 ease-in-out hover:bg-green-100"
        />
        <Button 
          icon="pi pi-info-circle" 
          label="Info" 
          size="small" 
          severity="info" 
          onClick={() => addToast('info', 'info toast.')} 
          className="transition duration-300 ease-in-out hover:bg-blue-100"
        />
        <Button 
          icon="pi pi-exclamation-triangle" 
          label="Warning" 
          size="small" 
          severity="warning" 
          onClick={() => addToast('warning', 'warning toast.')} 
          className="transition duration-300 ease-in-out hover:bg-yellow-100"
        />
        <Button 
          icon="pi pi-times" 
          label="Error" 
          size="small" 
          severity="danger" 
          onClick={() => addToast('error', 'error toast.')} 
          className="transition duration-300 ease-in-out hover:bg-red-100"
        />
        <Button 
          icon="pi pi-refresh" 
          label="Dismiss All" 
          size="small" 
          severity="danger" 
          onClick={() => dismissAll()} 
          className="transition duration-300 ease-in-out hover:bg-red-100"
        />
      </div>

      <ToastContainer />
    </div>
  );
}

export default Toast;
