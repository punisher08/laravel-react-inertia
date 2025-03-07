import './bootstrap';
import '../css/app.css';
import '../scss/app.scss';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from "@/Layouts/Layout"

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`];
    page.default.layout = page.default.layout || (( page ) => <Layout children={page}/>);
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress:{
    color:"#834187",
    showSpinner: true
  }
})