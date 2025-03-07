import { FC, useState } from "react";
import { Toaster, toast } from 'sonner';

interface ChangePasswordProps {}

const ChangePassword: FC<ChangePasswordProps> = ({}) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const updatePassword = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent form submission (if used inside a form)
        if (newPassword !== confirmPassword) {
            toast.error('Passwords don\'t match.');
        } else {
            toast.success('Password successfully updated.');
            setNewPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <>
            <form onSubmit={updatePassword}>
                {/* Hidden username field for password managers */}
                <input
                    type="text"
                    name="username"
                    autoComplete="username"
                    style={{ display: 'none' }} // Hide the field visually
                    aria-hidden="true" // Hide from screen readers
                />

                <div className="mb-6">
                    <label htmlFor="new_password" className="block mb-2 text-sm font-medium dark:text-white">
                        Новый пароль
                    </label>
                    <input
                        type="password"
                        id="new_password"
                        name="new_password"
                        autoComplete="new-password"
                        value={newPassword}
                        className="text-sm rounded-lg block w-full p-2.5 shadow-sm bg-gray-200 dark:bg-gray-800 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                        required
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium dark:text-white">
                        Подтвердить пароль
                    </label>
                    <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        autoComplete="new-password"
                        value={confirmPassword}
                        className="text-sm rounded-lg block w-full p-2.5 shadow-sm bg-gray-200 dark:bg-gray-800 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:w-auto sm:px-5 px-10 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 disabled:bg-gray-500"
                    disabled={!confirmPassword || !newPassword}
                >
                    Обновить пароль
                </button>
            </form>
            <Toaster richColors position="top-right" />
        </>
    );
};

export default ChangePassword;