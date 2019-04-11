import React, { Component } from 'react';
import { observer } from 'mobx-react';
import storage from '../../storage/storage';
import DepartmentsInput from '../DepartmentsInput/DepartmentsInput';

@observer
class Filter extends Component {
    constructor(props: {}) {
        super(props);

        storage.getDepartments();
        storage.getCategories();
    }

    render() {
        return (
            <div>
                <h3>{storage.departments ? 'Departments' : 'Loading Departments...'}</h3>
                <DepartmentsInput />

                {storage.currentDepartment != null && <h3>{storage.categories ? 'Categories' : 'Loading Categories...'}</h3>}
                {storage.categories && storage.categories.map((cat) => {
                    if (cat.department_id != storage.currentDepartment) return null;
                    return (
                        <button key={cat.category_id.toString()}
                            onClick={() => {
                                storage.setCategory(cat.category_id);
                                storage.getProductsByCategory(cat.category_id);
                            }}
                            style={{ background: storage.currentCategory == cat.category_id ? 'gray' : 'white' }}>
                            {cat.name}
                        </button>
                    );
                })}
            </div>
        );
    }
}

export default Filter;