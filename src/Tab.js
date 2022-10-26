import React, { useState } from'react';
import Tabs from'@mui/material/Tabs';
import Tab from'@mui/material/Tab';
function TabApp() {
    const [value, setValue] = useState('one');

    const handleChange = (event, value) => {
          setValue(value);
    };
    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="Home" label="HOME" />
                <Tab value="Todos" label="TODOS" />
            </Tabs>
            {value === 'Home' && <div>Welcome to page</div>}
            {value === 'Todos' && <div></div>}
        </div>
    );
}
export default TabApp;