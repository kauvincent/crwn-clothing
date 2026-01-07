import React, { Component } from 'react';

import './sign-up.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../components/form-input/form-input.component';

import { auth, createUserProfileDocument } from '../components/firebase/firebase.utils';

class SignUP extends Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit =async event =>{
        event.preventDefault();

        const {displayName, email, passward, confirmPassword} = this.state;

        if (passward !== confirmPassword){
            alert("Passords don't match");
            return;
        }

        try{

            const {user} = await auth.createUserWithEmailandPassword(email,passward);
            await createUserProfileDocument(user,{displayName});

            this.setState({displayName: '',
            email: '',
            password:'',
            confirmPassword:''})
        }catch(error){
            console.error(error);
        }

    } 
    
    handleChange=event=>{
        const { name, value} = event.target;

        this.setState({[name]: value});
    }

    render(){
        const {displayName, email, passward, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h1 className='title'>I do not have an account</h1>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label={displayName}
                    required />

                     <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label={email}
                    required />

                     <FormInput
                    type='passward'
                    name='passward'
                    value={passward}
                    onChange={this.handleChange}
                    label={passward}
                    required />

                     <FormInput
                    type='passward'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label={confirmPassword}
                    required />

                    <CustomButton type ='submit' >SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUP;
