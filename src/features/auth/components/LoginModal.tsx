import { Dialog } from '@headlessui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  email: string;
  password: string;
  isSignup: boolean;
  setEmail: (val: string) => void;
  setPassword: (val: string) => void;
  setIsSignup: (val: boolean) => void;
};

const LoginModal = ({
  isOpen,
  onClose,
  onSubmit,
  email,
  password,
  isSignup,
  setEmail,
  setPassword,
  setIsSignup
}: Props) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-opacity-90">
        <Dialog.Panel className="bg-gray-950 text-white p-6 rounded-2xl shadow-2xl w-full max-w-sm border border-gray-700">
          <Dialog.Title className="text-2xl font-semibold mb-4 text-center">
            {isSignup ? 'Sign Up' : 'Login'}
          </Dialog.Title>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className="space-y-4"
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded"
            >
              {isSignup ? 'Sign Up' : 'Login'}
            </button>
          </form>
          <p className="text-sm text-gray-400 text-center mt-4">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              className="text-blue-400 hover:underline ml-1"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? 'Login' : 'Sign Up'}
            </button>
          </p>
          <button
            onClick={onClose}
            className="block mx-auto mt-4 text-sm text-gray-500 hover:text-gray-300"
          >
            Cancel
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default LoginModal;
