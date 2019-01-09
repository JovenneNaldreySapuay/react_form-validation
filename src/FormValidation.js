import React, { Component } from 'react';
import { Form, Button, Grid, TextArea } from 'semantic-ui-react';

class CreateForm extends Component {

	state = {
		data: {
			_id: null,
			firstname: '',
			lastname: '',
			address: '',
			age: '',
			hobby: '',
			occupation: '',
			description: '',
			image: null
		},
		loading: false,
		errors: {}
	};

	handleOnSubmit = async (e) => {

		e.preventDefault();

		const errors = this.validate(this.state.data);

	    this.setState({ errors });

		const isValid = Object.keys(errors).length === 0;

		if (isValid) { 
			
			const { data } = this.state;

			// construct data object
			const info = {
				firstname: data.firstname,
				lastname: data.lastname,
				address: data.address,
				age: data.age,
				hobby: data.hobby,
				occupation: data.occupation,
				description: data.description,
				image: data.image
			};

			// if all data are valid, SAVE to the Database!
			// this.props.saveToDB( info );
			console.log("Info", info );			

			this.setState({ loading: true });
		}
	};

	handleOnChange = e => {

		if (!!this.state.errors[e.target.name]) {

			let errors = Object.assign({}, this.state.errors);
					
			delete errors[e.target.name];

			this.setState({
				errors,
				data: {
					...this.state.data,
					[e.target.name]: e.target.value,
					[e.target.name]: e.target.files[0]
				}

			});

		} else {
			
			this.setState({ 
				data: {
					...this.state.data,
					[e.target.name]: e.target.value
				}
			});
		}
	}

	validate = values => {
    	const errors = {};
    	if (!this.state.data.firstname) errors.firstname = "First name is required";
    	if (!this.state.data.lastname) errors.lastname = "Last name is required";
    	if (!this.state.data.address) errors.address = "Address is required";
    	if (!this.state.data.age) errors.age = "Age is required";
    	if (!this.state.data.hobby) errors.hobby = "Hobby is required";
    	if (!this.state.data.occupation) errors.occupation = "Occupation is required";
    	if (!this.state.data.description) errors.description = "Description is required";
    	if (!this.state.data.image) errors.image = "Image is required";
    	return errors;
  	};
  	
	render() {

	    const { data, errors, loading } = this.state;

	  	const InlineError = ({ text }) => (
	  		<span style={{ color: "#ae5856" }}>{text}</span>
		);

		return (
			<Grid>
				<Grid.Row>
				<Grid.Column width={16}>
				<h1>Add New</h1>
				<Form onSubmit={ this.handleOnSubmit } loading={ loading }>
					
					<Form.Field error={ !!errors.firstname }>
						<label htmlFor="firstname">First name</label>
						<input 
						type="text" 
						name="firstname" 
						value={data.firstname}
						placeholder="Enter First name"
						onChange={this.handleOnChange}
						/>
						{errors.firstname && <InlineError text={errors.firstname} />}
					</Form.Field>

					<Form.Field error={ !!errors.lastname }>
						<label htmlFor="lastname">Last name</label>
						<input 
						type="text" 
						name="lastname" 
						value={data.lastname}
						placeholder="Enter Last name"
						onChange={this.handleOnChange}
						/>
						{errors.lastname && <InlineError text={errors.lastname} />}
					</Form.Field>

					<Form.Field error={ !!errors.address }>
						<label htmlFor="address">Address</label>
						<input 
						type="text" 
						name="address" 
						value={data.address}
						placeholder="Enter Address"
						onChange={this.handleOnChange}
						/>
						{errors.address && <InlineError text={errors.address} />}
					</Form.Field>

					<Form.Field error={ !!errors.age }>
						<label htmlFor="age">Age</label>
						<input 
						type="text" 
						name="age" 
						value={data.age}
						placeholder="Enter Age"
						onChange={this.handleOnChange}
						/>
						{errors.age && <InlineError text={errors.age} />}
					</Form.Field>

					<Form.Field error={ !!errors.hobby }>
						<label htmlFor="hobby">Hobby</label>
						<input 
						type="text" 
						name="hobby" 
						value={data.hobby}
						placeholder="Enter Hobby"
						onChange={this.handleOnChange}
						/>
						{errors.hobby && <InlineError text={errors.hobby} />}
					</Form.Field>
	
					<Form.Field error={ !!errors.occupation }>
						<label htmlFor="occupation">Occupation</label>
						<input 
						type="text" 
						name="occupation" 
						value={data.occupation}
						placeholder="Enter Occupation"
						onChange={this.handleOnChange}
						/>
						{errors.occupation && <InlineError text={errors.occupation} />}
					</Form.Field>
					
					<Form.Field error={ !!errors.description }>
						<label htmlFor="description">Description</label>
						<TextArea 
							placeholder="Tell us more" 
							value={data.description}
							name="description"
							rows={5} 
							onChange={this.handleOnChange}
						/>
						{errors.description && <InlineError text={errors.description} />}
					</Form.Field>

					<Form.Field error={ !!errors.image }>
						<label htmlFor="image">Image</label>
						<input
		                  type="file"
		                  id="image"
		                  name="image"
		                  onChange={this.handleOnChange}
		                />
	        			{errors.image && <InlineError text={errors.image} />}
					</Form.Field>

					<Button primary>Validate Form</Button>
				</Form>
				</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default CreateForm;