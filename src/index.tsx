// Please note that in order to be able to use the following style ...
// import React from 'react'
// ... it will be important to have tsconfig.json with the following minimum contents
// {
//     "compilerOptions": {                            // Ref: https://www.typescriptlang.org/tsconfig
//         "allowSyntheticDefaultImports": true,       // Allow importing like `import React from 'react'`
//         "module": "ES2015",                         // Use ES2015 module system
//         "jsx": "react",                             // set React as the JSX factory 
//     }
// }

import * as React from 'react';
import { render } from 'react-dom';

import Counter from './Counter';


render(<Counter />, document.getElementById('main'));