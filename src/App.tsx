import React from 'react';

import Iterator from './components/range-task/Iterator';
import Generator from './components/range-task/Generator';
import Toast from './components/toast-task/ToastSection';

import { ToastProvider } from './contexts/ToastContext';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <div className="container py-2 min-h-screen flex flex-col justify-center items-center">
        <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>
          <Iterator />
          <Generator />
        </div>
        <Toast />
      </div>
    </ToastProvider>
  );
}

export default App;
