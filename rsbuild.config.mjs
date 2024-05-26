import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

export default defineConfig({
  plugins: [pluginVue()],
  // tools: {
  //   bundlerChain: ( chain, { CHAIN_ID} ) => {
  //     chain.plugin('Rsdoctor').use(RsdoctorRspackPlugin, [
  //       {
  //         disableClientServer: false,
  //         features: ['bundle', 'plugins'],
  //       }
  //     ])
  //   }
  // }
});
