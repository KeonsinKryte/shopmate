import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Storage from '../../storage/storage';

const DepartmentsInput = () => {
    var handleClick = (id: number) => {
        Storage.setDepartment(id);
    }

    return (
        <div>
            {Storage.departments && Storage.departments.map((dep) => {
                return (
                    <button key={dep.department_id}
                        onClick={() => {
                            handleClick(dep.department_id);
                            Storage.getProductsById(dep.department_id);
                        }}
                        style={{
                            backgroundColor: Storage.currentDepartment === dep.department_id ? '' : 'white',
                        }}
                        className={Storage.currentDepartment === dep.department_id ? 'active' : ''}>
                        {dep.name}
                    </button>
                );
            })}
        </div>
    );
}

export default observer(DepartmentsInput);