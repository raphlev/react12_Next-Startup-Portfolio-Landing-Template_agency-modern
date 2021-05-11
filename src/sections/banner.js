/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-thumb.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import TextFeature from 'components/text-feature';

const data = {
  subTitle: 'Explorer Other Templates',
  title: 'More templates in https://startuplanding.redq.io/',
  features: [
    {
      id: 1,
      subTitle: 'Experience your ultimate mobile application',
      name: 'Click',
      url: 'https://react-next-template-app-modern.netlify.app/',
    },
    {
      id: 2,
      subTitle: 'Coworking space that will feel like home',
      name: 'Click',
      url: 'https://react-next-template-saas-modern.netlify.app/',
    },
    {
      id: 3,
      subTitle: 'Create beautiful landing page in few minutes',
      name: 'Click',
      url: 'https://react-next-template-agency-classic.netlify.app/',
    },
    {
      id: 4,
      subTitle: 'Donate for the smile of orphans face',
      name: 'Click',
      url: 'https://react-next-template-online-fundraising.netlify.app/',
    },
    {
      id: 5,
      subTitle: 'Ultimate support system for leading agencies',
      name: 'Click',
      url: 'https://react-next-template-agency-alpha.netlify.app/',
    },
    {
      id: 6,
      subTitle: 'Built your business with a website',
      name: 'Click',
      url: 'https://react-next-template-hosting-provider.netlify.app/',
    },
    {
      id: 7,
      subTitle: 'Creativity starts with viewing the whole world differently',
      name: 'Click',
      url: 'https://react-next-template-startup-agency.netlify.app/',
    },
    {
      id: 8,
      subTitle: 'hosting-classicSmart',
      name: 'Click',
      url: 'https://react-next-template-hosting-classic.netlify.app/',
    },
  ],
};

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Top Quality Digital Products To Explore
          </Heading>
          <Text as="p" variant="heroSecondary">
            Get your blood tests delivered at let home collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </Text>
          <Button variant="primary">Explore</Button>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt="banner" />
        </Box>

        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
           {data.subTitle}
          </Heading>
          <Text as="p" variant="heroSecondary">
          {data.title}
          </Text>
          {data.features.map((item) => (
            <TextFeature 
            subTitle={item.subTitle} 
            btnName={item.name} 
            btnURL={item.url}  />
          ))}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
