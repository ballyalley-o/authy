import { Container, Card } from 'react-bootstrap'
//  @hooks
// import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '@slices/user'
import { useSelector } from 'react-redux'
// @components
import { Button } from '@components/Button'
import { Loader } from '@components/Default'
// @constants
import { DESC, HEADER, PATH } from '@constants'
// @icons
import { AuthyIcon } from '@icons'
// @styles
import * as _ from '@styles'

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const [{ isLoading }] = useRegisterMutation()

  return (
    <div className={_.StyledHeroWrapperDiv}>
      <Container className={_.StyledHeroContainer}>
        <Card className={_.StyledHeroCard}>
          <AuthyIcon className={_.StyledHeroBrandIcon} />
          <h1 className={_.StyledHeroBrandLabel}>{HEADER.brand_hero}</h1>
          <p className={_.StyledHeroDesc}>{DESC}</p>
          <div className={_.StyledHeroWrapperBtn}>
            <Button
              link={PATH.register}
              label={HEADER.join}
              className={_.StyledHeroBtn(userInfo)}
            >
              {!userInfo || !isLoading ? HEADER.join : <Loader />}
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default Hero
