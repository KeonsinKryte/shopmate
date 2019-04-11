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
                    <button type='button' key={dep.department_id}
                        onClick={() => {
                            handleClick(dep.department_id);
                            Storage.getProductsByDepartment(dep.department_id);
                        }}
                        className={Storage.currentDepartment === dep.department_id ? 'filter__button active btn btn-dark' : 'filter__button btn btn-outline-dark'}>
                        {dep.name}
                    </button>
                );
            })}
        </div>
    );
}

export default observer(DepartmentsInput);