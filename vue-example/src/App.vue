<script setup lang="ts">
import {DBCustomSelect} from "@db-ux/v-core-components";
import {ref} from "vue";

const options = ref([{"value":"Option 1"},{"value":"Option 2"}])

</script>

<template>
  <main>
    <DBCustomSelect :options="options" multiple placeholder="Placeholder" label="Label" :on-select="values=>console.log(values)">
    </DBCustomSelect>
  </main>
</template>
