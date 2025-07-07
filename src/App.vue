<script>
import Sales from './components/Pages/Sales.vue';
import Inventories from './components/Pages/Inventories.vue';
import Reports from './components/Pages/Reports.vue';
import Settings from './components/Pages/Settings.vue';
import Purchasing from './components/Pages/Purchasing.vue';
import Dashboard from './components/Pages/Dashboard.vue';
</script>
<template>
  <div id="app" class="flex min-h-screen bg-gray-100">
    <aside class="w-56 bg-gray-800 text-white flex flex-col py-6">
      <div class="text-2xl font-bold text-center mb-8 tracking-wider">MyERP</div>
      <nav>
        <ul class="space-y-4">
            <li>
            <router-link to="/" class="block px-8 py-2 rounded hover:bg-gray-700" active-class="bg-gray-700">Dashboard</router-link>
            </li>
            <li>
            <router-link to="/sales" class="block px-8 py-2 rounded hover:bg-gray-700" active-class="bg-gray-700">Sales</router-link>
            </li>
            <li>
            <router-link to="/inventories" class="block px-8 py-2 rounded hover:bg-gray-700" active-class="bg-gray-700">Inventory</router-link>
            </li>
            <li>
            <router-link to="/purchases" class="block px-8 py-2 rounded hover:bg-gray-700" active-class="bg-gray-700">Purchasing</router-link>
            </li>
            <li>
            <router-link to="/products" class="block px-8 py-2 rounded hover:bg-gray-700" active-class="bg-gray-700">Products</router-link>
            </li>
            <li>
            <router-link to="/customers" class="block px-8 py-2 rounded hover:bg-gray-700" active-class="bg-gray-700">Customers</router-link>
            </li>
            <li>
            <router-link to="/reports" class="block px-8 py-2 rounded hover:bg-gray-700" active-class="bg-gray-700">Reports</router-link>
            </li>
            <li>
            <router-link to="/settings" class="block px-8 py-2 rounded hover:bg-gray-700" active-class="bg-gray-700">Settings</router-link>
            </li>
        </ul>
      </nav>
    </aside>
    <div class="flex-1 flex flex-col">
      <header class="bg-white px-8 py-4 flex justify-end items-center border-b border-gray-200">
        <div class="flex items-center gap-3">
          <span class="text-gray-700">Welcome, User</span>
          <img src="https://ui-avatars.com/api/?name=User" alt="User Avatar" class="w-9 h-9 rounded-full" />
        </div>
      </header>
      <section class="p-8">
        <router-view>
          
        </router-view>
        <Dashboard />
        <Sales />
        <Inventories />
        <Purchasing />
        <Reports />
        <Settings />
      </section>
    </div>
  </div>
</template>
