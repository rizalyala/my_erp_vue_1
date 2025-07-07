<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl flex flex-col md:flex-row gap-8">
            <!-- Login Form -->
            <div class="flex-1">
                <h2 class="text-2xl font-bold mb-6 text-gray-800">Login</h2>
                <form @submit.prevent="login" class="space-y-4">
                    <div>
                        <label for="login-email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="login-email" v-model="loginEmail" required
                            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label for="login-password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" id="login-password" v-model="loginPassword" required
                            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <button type="submit"
                        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
                </form>
            </div>
            <!-- Sign Up Form -->
            <div class="flex-1 border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8">
                <h2 class="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
                <form @submit.prevent="signUp" class="space-y-4">
                    <div>
                        <label for="signup-email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="signup-email" v-model="signupEmail" required
                            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label for="signup-password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" id="signup-password" v-model="signupPassword" required
                            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label for="signup-confirm" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input type="password" id="signup-confirm" v-model="signupConfirm" required
                            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <button type="submit"
                        class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Accounts',
    components: {},
    data() {
        return {
            // Placeholder for future data
        };
    },
    methods: {
        // Placeholder for future methods
    }
};
</script>