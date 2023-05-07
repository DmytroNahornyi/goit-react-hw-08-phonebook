import {
  HomePageContainer,
  HomePageLink,
  HomePageSection,
  HomePageWrap,
} from './HomePage.styled';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <HomePageSection>
        <HomePageContainer>
          <HomePageWrap>
            <p>Welcome to the phone book!</p>
            <p>Register or login to your personal
              account{' '}
              {<HomePageLink to="/register"> Registration </HomePageLink>}
              or
              {<HomePageLink to="/login"> Login </HomePageLink>}
              {/* if you already have an account. */}
            </p>
          </HomePageWrap>
        </HomePageContainer>
      </HomePageSection>
    </motion.div>
  );
};

export default HomePage;
