import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { IMAGE } from '../../Constants';
import styles from '../../Styles/ForgetPasswordScreenCss';
import OTPTextView from 'react-native-otp-textinput';

const OtpScreen = ({ navigation }) => {
  const [OTP, setOTP] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (OTP.length === 5) {
      navigation.navigate('ResetPasswordScreen');
    } else {
      setError("Please enter a valid 5-digit OTP.");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>FarmerEats</Text>
      </View>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.title}>Verify OTP</Text>
        <View style={styles.newHereContainer}>
          <Text style={styles.newHereText}>Remember your password? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.createAccountText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View>
          <OTPTextView
            containerStyle={styles.textInputContainer}
            textInputStyle={styles.otpTextInput}
            tintColor={'#000'}
            focusedBorderColor="green"
            keyboardType="numeric"
            inputCount={5}
            handleTextChange={setOTP}
          />
        </View>
        {error ? <Text style={styless.errorText}>{error}</Text> : null}
        <TouchableOpacity
          style={[styles.loginButton, { marginTop: 30 }]}
          onPress={handleSubmit}>
          <Text style={[styles.loginButtonText]}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={[
              styles.newHereText,
              { textDecorationLine: 'underline', color: '#000000' },
            ]}>
            Resend Code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styless = StyleSheet.create({
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default OtpScreen;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import styles from '../../Styles/ForgetPasswordScreenCss';
// import OTPTextView from 'react-native-otp-textinput';

// const OtpScreen = ({ navigation }) => {
//   const [OTP, setOTP] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     // Validate OTP before making the API call
//     if (OTP.length === 0) {
//       setError("OTP cannot be empty.");
//       return;
//     }
//     if (OTP.length !== 6) {
//       setError("Please enter a valid 6-digit OTP.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       // Log the OTP
//       console.log("Sending OTP:", OTP);

//       // API call to verify OTP
//       const response = await fetch('https://sowlab.com/assignment/user/verify-otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ otp: OTP }), // OTP sent as a string
//       });

//       const data = await response.json();

//       // Log the response status and the full data
//       console.log("API Response Status:", response.status);
//       console.log("API Response Data:", data);

//       // Handle the response
//       if (response.status === 200 && data.success) {
//         // OTP verification successful
//         navigation.navigate('ResetPasswordScreen');
//       } else {
//         // OTP verification failed
//         setError(data.message || "Unable to verify OTP, please try again.");
//       }
//     } catch (error) {
//       console.error("API Error:", error);
//       setError("An error occurred, please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.headerText}>FarmerEats</Text>
//       </View>
//       <View style={styles.subHeaderContainer}>
//         <Text style={styles.title}>Verify OTP</Text>
//         <View style={styles.newHereContainer}>
//           <Text style={styles.newHereText}>Remember your password? </Text>
//           <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
//             <Text style={styles.createAccountText}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View style={styles.bottomContainer}>
//         <View>
//           <OTPTextView
//             containerStyle={styles.textInputContainer}
//             textInputStyle={styles.otpTextInput}
//             tintColor={'#000'}
//             focusedBorderColor="green"
//             keyboardType="numeric"
//             inputCount={6} // Set for 6 digits
//             handleTextChange={setOTP} // Update OTP state
//           />
//         </View>
//         {error ? <Text style={styless.errorText}>{error}</Text> : null}
//         <TouchableOpacity
//           style={[styles.loginButton, { marginTop: 30 }]}
//           onPress={handleSubmit}
//           disabled={loading}
//         >
//           <Text style={[styles.loginButtonText]}>{loading ? 'Submitting...' : 'Submit'}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text
//             style={[
//               styles.newHereText,
//               { textDecorationLine: 'underline', color: '#000000' },
//             ]}>
//             Resend Code
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styless = StyleSheet.create({
//   errorText: {
//     color: 'red',
//     marginTop: 10,
//     textAlign: 'center',
//   },
// });

// export default OtpScreen;
