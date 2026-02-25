import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Settings() {
    const [name, setName] = useState('Johnathan Doe');
    const [phone, setPhone] = useState('+1 (555) 000-1234');
    const [address, setAddress] = useState('1234 Elm Street, Springfield, IL 62704');

    const handleSave = (e) => {
        e.preventDefault();
        alert('Settings Saved Successfully');
    };

    return (
        <div className="w-full max-w-4xl mx-auto py-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <Link className="hover:text-admin-primary transition-colors" to="/admin/pulse">Dashboard</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-gray-800 dark:text-white font-medium">Admin Settings</span>
            </div>

            <div className="glass-panel rounded-3xl overflow-hidden relative border border-gray-200 dark:border-white/10 shadow-xl bg-card-light dark:bg-card-dark">
                {/* Cover Photo */}
                <div className="h-32 bg-gradient-to-r from-emerald-800 to-admin-primary/30 relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>

                <div className="px-8 pb-8">
                    <div className="relative flex flex-col sm:flex-row items-end sm:items-center -mt-12 mb-8 gap-6">
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-full p-1 bg-white dark:bg-background-dark shadow-xl">
                                <img alt="Profile" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLtZV90lrXTbIm64MpzCUWlvfGOp0dpeYHUi4q-MTEmtr24JkaVL8J1tJoAjB9dFJsRmoKUk8DxOXAwG6HCkRQMMq0xHdGiOZsVKEggI2LFvWtMXewI4-IBFRzzlnWRvioaplvCwzCn9gNclBr0UsKw-bBrm_CsNo8KOMeTGYPthqp4mEZvYxZ-Pn6JwDHnfBPVWzVQGeznhp0u-GbW5ZbBo2A_y8wosed_oRvrx4E2FISRkhj3utPufNOc6w0V9aQzTupaKvTHRI" />
                            </div>
                            <button className="absolute inset-0 flex items-center justify-center bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm m-1 cursor-pointer">
                                <span className="material-symbols-outlined">edit</span>
                            </button>
                            <div className="absolute bottom-2 right-2 bg-white dark:bg-background-dark rounded-full p-1.5 shadow-md">
                                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-background-dark"></div>
                            </div>
                        </div>

                        <div className="flex-1 text-center sm:text-left pt-2 sm:pt-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
                                {name}
                                <span className="material-symbols-outlined text-admin-primary text-xl" title="Verified User">verified</span>
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Member since 2021 • Pro Plan</p>
                        </div>

                        <div className="flex gap-3 mt-4 sm:mt-0 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none py-2 px-4 rounded-xl border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-sm font-medium">
                                View Public Profile
                            </button>
                        </div>
                    </div>

                    <form className="space-y-8" onSubmit={handleSave}>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                <span className="p-1.5 rounded-lg bg-admin-primary/10 text-admin-primary">
                                    <span className="material-symbols-outlined text-xl">person</span>
                                </span>
                                Personal Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide ml-1">Full Name</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <span className="material-symbols-outlined text-lg">badge</span>
                                        </span>
                                        <input
                                            className="w-full bg-input-bg-light dark:bg-input-bg-dark border border-gray-200 dark:border-white/10 pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all text-typography-light dark:text-white focus:ring-2 focus:ring-admin-primary focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
                                            placeholder="Enter your full name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide ml-1">Phone Number</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <span className="material-symbols-outlined text-lg">call</span>
                                        </span>
                                        <input
                                            className="w-full bg-input-bg-light dark:bg-input-bg-dark border border-gray-200 dark:border-white/10 pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all text-typography-light dark:text-white focus:ring-2 focus:ring-admin-primary focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
                                            placeholder="+1 (000) 000-0000"
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5 md:col-span-2">
                                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide ml-1">Home Address</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <span className="material-symbols-outlined text-lg">home_pin</span>
                                        </span>
                                        <input
                                            className="w-full bg-input-bg-light dark:bg-input-bg-dark border border-gray-200 dark:border-white/10 pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all text-typography-light dark:text-white focus:ring-2 focus:ring-admin-primary focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
                                            placeholder="Street address, City, State, Zip"
                                            type="text"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 dark:border-white/10" />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                <span className="p-1.5 rounded-lg bg-admin-accent-lime/10 text-admin-accent-lime">
                                    <span className="material-symbols-outlined text-xl">verified_user</span>
                                </span>
                                Identity Verification
                            </h3>
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-admin-primary to-admin-accent-lime rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                <div className="relative w-full border-2 border-dashed border-admin-accent-lime/50 dark:border-admin-accent-lime/30 bg-gray-50/50 dark:bg-black/20 rounded-2xl p-8 text-center hover:bg-admin-accent-lime/5 transition-colors cursor-pointer group-hover:border-admin-accent-lime">
                                    <div className="flex flex-col items-center justify-center gap-3">
                                        <div className="w-16 h-16 rounded-full bg-admin-accent-lime/10 flex items-center justify-center mb-2">
                                            <span className="material-symbols-outlined text-3xl text-admin-accent-lime">cloud_upload</span>
                                        </div>
                                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">Upload your NID (Front &amp; Back)</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                                            Drag and drop your files here, or <span className="text-admin-accent-lime hover:underline font-medium">browse files</span>. Supported formats: JPEG, PNG, PDF.
                                        </p>
                                    </div>
                                    <input accept="image/*,.pdf" className="hidden" multiple type="file" />
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 dark:border-white/10" />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500">
                                    <span className="material-symbols-outlined text-xl">translate</span>
                                </span>
                                Skills &amp; Language
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide ml-1">English Proficiency</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <span className="material-symbols-outlined text-lg">language</span>
                                        </span>
                                        <select className="w-full bg-input-bg-light dark:bg-input-bg-dark border border-gray-200 dark:border-white/10 pl-10 pr-10 py-2.5 rounded-xl text-sm appearance-none cursor-pointer focus:ring-2 focus:ring-admin-primary focus:outline-none text-gray-800 dark:text-gray-100" defaultValue="advanced">
                                            <option disabled value="">Select Level</option>
                                            <option value="beginner">Beginner</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="advanced">Advanced</option>
                                            <option value="native">Native</option>
                                        </select>
                                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                                            <span className="material-symbols-outlined">expand_more</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 flex flex-col sm:flex-row items-center justify-end gap-4">
                            <button className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors border border-transparent" type="button">
                                Cancel
                            </button>
                            <button className="w-full sm:w-auto bg-gradient-to-r from-admin-primary to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white px-8 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-[1.02] active:scale-[0.98]" type="submit">
                                Save Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
