import React from 'react'

import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                email: '',
                password:'',
        }
    }

    handleSubmit =  async event => {
        event.preventDefault()
        const { email, password } = this.state
            try {
                await auth.signInWithEmailAndPassword(email,password)
                this.setState ({ email:'', password: '' })
        } 
        catch(error) {
            console.log(error)
        }

    }
    handleChange = event => {
        const {value, name} = event.target
        this.setState ({ [name]: value})
    }
    
    render() {

        return (
            <div className='sign-in'>
                <h2>You already possess an account with us!</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit= {this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type='email' 
                        value={this.state.email} 
                        required
                        handleChange={this.handleChange}
                        label='email'
                    />
                    <FormInput
                        name="password" 
                        type='password' 
                        value={this.state.password} 
                        required
                        handleChange={this.handleChange}
                        label='password'
                     />
                     <div className='buttons'>
                     <CustomButton type='submit' value='Submit Form'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                     </div>
                </form>
            </div>
        )
    }
}
export default SignIn