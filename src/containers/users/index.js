import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import { userActions } from '../../redux/actions';
import './style.css';

class Users extends Component {
  constructor(props) {
		super(props);
		this.state = {
			selectedRows: [],
			columns: [
				{
					name: 'Nombre',
					selector: 'name',
					sortable: true
				},
				{
					name: 'Teléfono',
					selector: 'phone',
					sortable: true
				},
				{
					name: 'Email',
					selector: 'email',
					sortable: true
				},
				{
					name: 'Estado',
					selector: 'status',
					sortable: false,
					cell: row => (
							row.status ?
							<span className="text-xs font-semibold inline-block py-1 px-2 rounded text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
								ACTIVO
							</span> :
							<span className="text-xs font-semibold inline-block py-1 px-2 rounded text-red-600 bg-red-200 uppercase last:mr-0 mr-1">
								INACTIVO
							</span>
						)
				}
			]
		}

		this.props.allUsers();
	}

	selectedRows(state) {
		this.setState({
			selectedRows: state.selectedRows
		});
	}

	inactiveUsers() {
		this.props.disableUsers(this.state.selectedRows);
	}

  render() {
    return (
			<div className="flex-none w-full bg-white shadow rounded">
				<div className="grid grid-cols-1 gap-2">
					<div className="py-2 px-2">
						<button
							className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 transition-all duration-500"
							onClick={() => this.inactiveUsers()}
							disabled={this.state.selectedRows.length === 0}>Inactivar</button>
						<button
							className="bg-green-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 transition-all duration-500"
							onClick={() => this.props.generateRandomUsers()}>Generar Usuarios Aleatorios</button>
					</div>
					<div>
						<DataTable
							columns={this.state.columns}
							data={this.props.auth.users}
							pagination={true}
							striped={true}
							selectableRows
							onSelectedRowsChange={(state) => this.selectedRows(state)}
						/>
					</div>
				</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
		allUsers: () => dispatch(userActions.all()),
		disableUsers: (users) => dispatch(userActions.inactiveUsers(users)),
		generateRandomUsers: () => dispatch(userActions.generateRandomUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);