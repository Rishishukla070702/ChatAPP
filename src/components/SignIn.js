import React from 'react'
import firebase from "firebase/compat/app";
import {Button} from '@material-ui/core'
import {auth} from '../firebase.js'

function SignIn() {
    function SignInWithGoogle() {
        const provider= new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={SignInWithGoogle}>SignIn with google</Button>
        </div>
    )
}

export default SignIn
