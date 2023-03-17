import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import '../static/index.html';
import './index.scss';
import './utils/Localization/Localization';

createRoot(document.querySelector('.root')).render(<App/>);