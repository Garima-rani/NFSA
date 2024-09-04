import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Header.css';
import Modal from '@mui/material/Modal';
import OfficialLogin from './OfficialLogin';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate\
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false); 

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOfficialLogin = () => {
    navigate('/official-login'); // Navigate to the official login page
  };

  return (
    <div className="header-container">
      <div className="header-logo">
        <img src="/nfsa-logo.png" alt="NFSA Logo" />
      </div>
      <div className="header-title">
        <h1>National Food Security Portal</h1>
        <p>Department of Food & Public Distribution,<br /> Government of India</p>
      </div>
      <div className="header-buttons">
        <div className="header-lang">
          <button className="lang-btn">-A</button>
          <button className="lang-btn">A</button>
          <button className="lang-btn">+A</button>
        </div>
        <div className="dropdown">
          <button className="header-button" onClick={toggleDropdown}>
            Sign In / Register ⬇
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
            <button className="dropdown-item">
                Public Login
              </button>
              <button className="dropdown-item" onClick={handleOpen}>
                Official Login
              </button>
              
            </div>
          )}
        </div>
        <button className="header-button">English ⬇</button>
        <Modal
         open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <OfficialLogin  onClose={handleClose}/>
      </Modal>
      </div>
    </div>
  );
}

export default Header;
// package com.spring.Security;
// import org.springframework.context.annotation.Bean;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    private final UserDetailsService userDetailsService;
//    private final JwtRequestFilter jwtRequestFilter;
//
//    public SecurityConfig(UserDetailsService userDetailsService, JwtRequestFilter jwtRequestFilter) {
//        this.userDetailsService = userDetailsService;
//        this.jwtRequestFilter = jwtRequestFilter;
//    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http.csrf().disable()
//                .authorizeRequests()
//                .requestMatchers("/authenticate", "/register").permitAll()
//                .requestMatchers("/admin/**").hasRole("ADMIN")
//                .requestMatchers("/user/**").hasAnyRole("USER", "ADMIN")
//                .anyRequest().authenticated()
//                .and()
//                .sessionManagement().disable()
//                .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
//
//        return http.build();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
//        return authenticationConfiguration.getAuthenticationManager();
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//}
////@Configuration
////@EnableWebSecurity
////public class SecurityConfig {
////
////    @Bean
////    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
////        http.csrf().disable()
////                .authorizeRequests()
////                .requestMatchers("/api/auth/register").permitAll()
////                .requestMatchers("/api/auth/login").permitAll()
////                .anyRequest().authenticated();
////        return http.build();
////    }
////
////    @Bean
////    public PasswordEncoder passwordEncoder() {
////        return new BCryptPasswordEncoder();
////    }
////}import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }

//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//         http
//             .authorizeRequests(authorizeRequests ->
//                 authorizeRequests
//                     .anyRequest().permitAll()
//             )
//             .csrf(csrf -> csrf.disable());

//         return http.build();
//     }
// }
