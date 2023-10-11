import classNames from 'classnames'

/**
 * @root {@app}
 */
export const StyledTitle = classNames('')
export const StyledLoader = classNames('loader')
export const StyledContainerMargin = classNames('mt-10')
export const StyledContainer = classNames('flex-row justify-center mt-10')
// @nav
export const StyledNavContainer = classNames('container')
export const StyledNavBrand = classNames('nav_brand')
export const StyledNavDropdown = classNames('text-primary')
export const StyledNavCollapse = classNames('ms-auto text-black')
// @sign in - page
export const StyledInputMargin = classNames('my-3')
export const StyledSignInH1 = classNames('text-6xl my-6')
// @form
export const StyledFormRow = classNames('py-3')
export const StyledFormLink = classNames('link-default')
export const StyledFormBtn = classNames('my-10 px-4 button-default')
export const StyledLoaderDiv = classNames('px-3')
//  @hero
export const StyledHeroWrapperDiv = classNames('py-5')
export const StyledHeroBrandIcon = classNames('text-8xl w-24 h-24')
export const StyledHeroBrandLabel = classNames(
  'text-center mb-4 text-8xl font-bold text-white italic Merriweather'
)
export const StyledHeroContainer = classNames(
  'd-flex justify-content-center pt-10'
)
export const StyledHeroCard = classNames(
  'p-5 d-flex flex-column align-items-center hero-card bg-dark w-75'
)
export const StyledHeroDesc = classNames(
  'text-center mb-4 font-light text-white my-20'
)
export const StyledHeroWrapperBtn = classNames('d-flex my-20')
export const StyledHeroBtn = (user) =>
  user ? classNames('hidden') : classNames('button-secondary')
