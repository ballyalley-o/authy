import * as _ from '@styles'

export const nav_dropdown = {
  id: 'username',
  className: _.StyledNavDropdown,
}

export const navbar = {
  bg: 'warning',
  expand: 'lg',
  collapseOnSelect: true,
}

export const nav_toggle = {
  id: 'basic-navbar-nav',
}

// @form
export const form_name = {
  type: 'name',
  label: 'Name',
  placeholder: 'Enter Name',
}

export const form_email = {
  type: 'email',
  label: 'Email',
  placeholder: 'Enter Email',
}

export const form_pw = {
  type: 'password',
  label: 'Password',
  placeholder: 'Enter Password',
}

export const form_pw_confirm = {
  type: 'password',
  label: 'Confirm Password',
  placeholder: 'Confirm Password',
}

export const form_submit = {
  type: 'submit',
  variant: 'warning',
  className: _.StyledFormBtn,
}
