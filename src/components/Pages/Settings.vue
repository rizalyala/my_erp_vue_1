<template>
    <div class="p-6 min-h-screen">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Settings</h2>

        <div class="bg-white rounded-lg shadow p-6 mb-6">
            <h3 class="text-xl font-semibold mb-4 text-gray-700">Font Settings</h3>
            <div class="space-y-4">
                <div>
                    <label for="fontFamily" class="block text-sm font-medium text-gray-700">Font Family</label>
                    <select id="fontFamily" v-model="selectedFontFamily" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Arial</option>
                        <option>Verdana</option>
                        <option>Helvetica</option>
                        <option>Roboto</option>
                    </select>
                </div>
                <div>
                    <label for="fontSize" class="block text-sm font-medium text-gray-700">Font Size</label>
                    <select id="fontSize" v-model="selectedFontSize" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow p-6 mb-6">
            <h3 class="text-xl font-semibold mb-4 text-gray-700">User Management</h3>
            <p class="text-gray-600 mb-4">Manage users and their roles within the system.</p>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Manage Users
            </button>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-xl font-semibold mb-4 text-gray-700">System Preferences</h3>
            <div class="space-y-4">
                <div class="flex items-center">
                    <input id="darkMode" type="checkbox" v-model="darkModeEnabled" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                    <label for="darkMode" class="ml-2 block text-sm text-gray-900">Enable Dark Mode</label>
                </div>
                <div class="flex items-center">
                    <input id="notifications" type="checkbox" v-model="notificationsEnabled" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                    <label for="notifications" class="ml-2 block text-sm text-gray-900">Receive Email Notifications</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Settings',
    data() {
        return {
            selectedFontFamily: 'Arial',
            selectedFontSize: 'Medium',
            darkModeEnabled: false,
            notificationsEnabled: true
        }
    }
}
</script>
