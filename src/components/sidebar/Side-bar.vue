<script>
import { collapsed,toggleSidebar, sidebarWidth } from './state'

export default {
    props: {},
    setup() {
        return {collapsed, toggleSidebar, sidebarWidth}
    }
}
</script>

<template>
    <div class="sidebar bg-black  m-0 p-0"  :class="{'bg-close' :collapsed}" :style="{width: sidebarWidth}">
        <div class="flex h-full w-full m-0 p-0">
            <div class="flex h-full w-4/5 pt-1" :class="{'view-close' :collapsed}">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </div>
            <div class="flex items-center bg-blue-600   m-0 p-0 h-full" >
                <span class="collapse-icon mx-auto p-1" :class="{ 'rotate-180' :collapsed}" @click="toggleSidebar">
                    <span class="material-icons p-1" >keyboard_double_arrow_left</span>
                </span>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
:root {
    --sidebar-bg-color: #181818;
    --sidebar-item-hover: #a9a9a9;
    --sidebar-item-active: #FFFFFF;
}

</style>

<style scoped>
.sidebar {
    color: rgb(255, 255, 255);
    /* background-color: black; */

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 2px;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}

.collapse-icon {
    padding: 0;
    transition: 0.2s linear;
    
}
.rotate-180 {
    transform: rotate(-180deg);
    transition: 0.2s linear;
    align-items: right;
    
}
.view-close {
    transition: 1s linear;
    display: none;
}

.bg-close {
    transition: 0.2s linear;
    background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}
</style>