// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from 'path'; // Import path module để sử dụng hàm resolve

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       // Ánh xạ alias "@/components" đến thư mục "src/components"
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// });

import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})