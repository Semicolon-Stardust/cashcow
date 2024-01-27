import React from "react";

function Profile() {
    return (
        <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                <div class="mb-8">
                    <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">
                        Profile
                    </h2>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Manage your name, password and account settings.
                    </p>
                </div>

                <form>
                    <div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
                        <div class="sm:col-span-3">
                            <label class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                Profile photo
                            </label>
                        </div>

                        <div class="sm:col-span-9">
                            <div class="flex items-center gap-5">
                                <img
                                    class="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                                    src="../assets/img/160x160/img1.jpg"
                                    alt="Image Description"
                                />
                                <div class="flex gap-x-2">
                                    <div>
                                        <button
                                            type="button"
                                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        >
                                            <svg
                                                class="flex-shrink-0 w-4 h-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                <polyline points="17 8 12 3 7 8" />
                                                <line x1="12" x2="12" y1="3" y2="15" />
                                            </svg>
                                            Upload photo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label
                                for="af-account-full-name"
                                class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                                Full name
                            </label>
                            <div class="hs-tooltip inline-block">
                                <button type="button" class="hs-tooltip-toggle ms-1">
                                    <svg
                                        class="inline-block w-3 h-3 text-gray-400 dark:text-gray-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                </button>
                                <span
                                    class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
                                    role="tooltip"
                                >
                                    Displayed on public forums, such as Preline
                                </span>
                            </div>
                        </div>

                        <div class="sm:col-span-9">
                            <div class="sm:flex">
                                <input
                                    id="af-account-full-name"
                                    type="text"
                                    class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                    placeholder="Maria"
                                />
                                <input
                                    type="text"
                                    class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                    placeholder="Boone"
                                />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label
                                for="af-account-email"
                                class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                                Email
                            </label>
                        </div>

                        <div class="sm:col-span-9">
                            <input
                                id="af-account-email"
                                type="email"
                                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="maria@site.com"
                            />
                        </div>

                        <div class="sm:col-span-3">
                            <label
                                for="af-account-password"
                                class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                                Password
                            </label>
                        </div>

                        <div class="sm:col-span-9">
                            <div class="space-y-2">
                                <input
                                    id="af-account-password"
                                    type="text"
                                    class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                    placeholder="Enter current password"
                                />
                                <input
                                    type="text"
                                    class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                    placeholder="Enter new password"
                                />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <div class="inline-block">
                                <label
                                    for="af-account-phone"
                                    class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                                >
                                    Phone
                                </label>
                                <span class="text-sm text-gray-400 dark:text-gray-600">
                                    (Optional)
                                </span>
                            </div>
                        </div>

                        <div class="sm:col-span-9">
                            <div class="sm:flex">
                                <input
                                    id="af-account-phone"
                                    type="text"
                                    class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                    placeholder="+x(xxx)xxx-xx-xx"
                                />
                                <select class="py-2 px-3 pe-9 block w-full sm:w-auto border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                    <option selected>Mobile</option>
                                    <option>Home</option>
                                    <option>Work</option>
                                    <option>Fax</option>
                                </select>
                            </div>

                            <p class="mt-3">
                                <a
                                    class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    href="../docs/index.html"
                                >
                                    <svg
                                        class="flex-shrink-0 w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M8 12h8" />
                                        <path d="M12 8v8" />
                                    </svg>
                                    Add phone
                                </a>
                            </p>
                        </div>

                        <div class="sm:col-span-3">
                            <label
                                for="af-account-gender-checkbox"
                                class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                                Gender
                            </label>
                        </div>

                        <div class="sm:col-span-9">
                            <div class="sm:flex">
                                <label
                                    for="af-account-gender-checkbox"
                                    class="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                >
                                    <input
                                        type="radio"
                                        name="af-account-gender-checkbox"
                                        class="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                        id="af-account-gender-checkbox"
                                        checked
                                    />
                                    <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">
                                        Male
                                    </span>
                                </label>

                                <label
                                    for="af-account-gender-checkbox-female"
                                    class="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                >
                                    <input
                                        type="radio"
                                        name="af-account-gender-checkbox"
                                        class="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                        id="af-account-gender-checkbox-female"
                                    />
                                    <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">
                                        Female
                                    </span>
                                </label>

                                <label
                                    for="af-account-gender-checkbox-other"
                                    class="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                >
                                    <input
                                        type="radio"
                                        name="af-account-gender-checkbox"
                                        class="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                        id="af-account-gender-checkbox-other"
                                    />
                                    <span class="text-sm text-gray-500 ms-3 dark:text-gray-400">
                                        Other
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label
                                for="af-account-bio"
                                class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                                BIO
                            </label>
                        </div>

                        <div class="sm:col-span-9">
                            <textarea
                                id="af-account-bio"
                                class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                rows="6"
                                placeholder="Type your message..."
                            ></textarea>
                        </div>
                    </div>

                    <div class="mt-5 flex justify-end gap-x-2">
                        <button
                            type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;
