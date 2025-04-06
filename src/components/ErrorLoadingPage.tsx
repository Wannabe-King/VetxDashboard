const ErrorLoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="animate-bounce">
          <svg
            className="w-20 h-20 mx-auto text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-stone-50 tracking-tight">
          Oops! Something Went Wrong
        </h1>
        
        <p className="text-slate-400 text-lg">
          We're having trouble loading this page. Please check your connection 
          and try again. If the problem persists, our team is already on it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-sm"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorLoadingPage;