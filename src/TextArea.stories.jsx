/*
 ************************************************************************************
 * Copyright (C) 2020-2022 Openbravo S.L.U.
 * Licensed under the Openbravo Commercial License version 1.0
 * You may obtain a copy of the License at http://www.openbravo.com/legal/obcl.html
 * or in the legal folder of this module distribution.
 ************************************************************************************
 */

import React, { useState } from 'react';
import {TextField} from "@mui/material";

export default {
    title: 'Multiline Input',
    decorators: []
};

export const Basic = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <TextField
            label="Label"
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            multiline
        />
    );
};

