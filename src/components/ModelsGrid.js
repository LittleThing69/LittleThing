import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContext, useState } from 'react';
import { ImagesPerRowContext } from '../contexts/ImagePerRowContext';
import FilterBar from './FilterBar';
import CircularProgress from '@mui/material/CircularProgress';


//console.log(setGridFilter);

export default function ModelsGrid() {

  const { imagesPerRow } = useContext(ImagesPerRowContext);

  const [loading, setLoading] = useState(true);

  const Large = useMediaQuery('(min-width:1260px)');
  const Desktop = useMediaQuery('(min-width:990px) and (max-width:1260px)');
  const Mobile = useMediaQuery('(min-width:410px) and (max-width:990px)');
  const Small = useMediaQuery('(max-width:410px)');

  //const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  //const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

  let cols;
  if (Small) { //ICONE FILTRE 1 OU 2
    cols = 1;
  }
  if (Mobile) { //ICONE FILTRE 1 OU 2
    cols = 2;
  }
  if (Desktop) {
    cols = 4;
  }
  if (Large) {
    cols = imagesPerRow;
  }
    
    return (
        <ImageList 
          sx={{ 
            display:'grid', 
            flexWrap: 'wrap',
            //justifyContent: 'space-around',
            //flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            width: 1,
            height: 'auto',
            margin: 'auto',
          }} 
          //cols={!Mobile ? 2 : 4} 
          //cols={!Mobile ? 2 : imagesPerRow}
          cols={cols}
          gap={15} 
          rowHeight={'auto'}
          > {/*SI COLS={6} : NE PAS AFFICHER TITLE*/}
            
            {itemData.map((item) => (
                <ImageListItem key={item.img} >
                    {loading && ( // si loading est true, afficher le composant Progress Circular
                      <CircularProgress />
                    )}
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        onLoad={() => setLoading(false)} // changer l'état de loading à false après le chargement de l'image
                        sx={{ display: loading ? 'none' : 'block' }} // cacher l'image tant que loading est true       
                    />
                     <ImageListItemBar sx={{ fontFamily:"SuperGroteskOffc,Helvetica,Arial,sans-serif"}}
                        title={item.title}
                        subtitle={item.author} 
                        position="below" 
                    />
                </ImageListItem>
            ))}
        </ImageList>
        
        
      );
}

const itemData = [
    {
      img: 'https://cdn-img.prettylittlething.com/d/d/5/7/dd57885c29645b1f600da88b0b6de85fea656060_cly1677_1.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Emily Makings - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/d/2/5/5/d25586088db556b78af96a1346e6ca3fabfae581_cma5657_3.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Unknown - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/7/5/4/4/754480a5ba060dc9daec26bb5b8054188125ce6a_cmq6195_1.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Agnes Pimentel - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/5/0/9/f/509f8ebf37d47b201dd8e264931e31dfacc973c5_cmq6190_1.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Agnes Pimentel - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/b/d/9/9/bd99a50bd7e4ea026397c182f7700653658e0842_cna3155_1.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Agnes Pimentel - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/0/a/d/c/0adc149c56970861512972f745f173c322560025_cnc1303_1.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Unknown - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/6/6/1/d/661d7c5a0c130ebce6d34e4e191cf3800c69bf9f_cmy6547_1.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Agnes Pimentel - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/1/a/7/5/1a75aea01b4961284ff51a097a7b8796c6ea1ffb_cmy6547_2.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Agnes Pimentel - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/e/7/6/d/e76dcc9bf638249fd030ae40e86bcae7ec29bcbd_cmy6547_3.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Agnes Pimentel - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/1/9/a/2/19a2a1a742050b6d82ed8b60ce3b381ef882c2ca_cnc9432_1.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Emily Makings - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/3/e/1/2/3e12dadea5eec1caf2c2f6b2756afafedaef587c_cnc9432_2.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Emily Makings - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/f/f/1/1/ff1162f2d7bc6638bd1caa00348381ef123d9ca4_cnc9432_3.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Emily Makings - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/b/8/6/f/b86f33be84cfe6035cb9d39ea2fee72847f8a59a_cmf9718_1.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Agnes Pimentel - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/c/e/3/f/ce3f6e30396436aeecbe4a4c1afbfa8761fbd43c_cmf9718_3.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Agnes Pimentel - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/a/3/3/5/a335997101aab0377c6ae8cc09a37f4b3ab5c96b_cmf9718_4.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Agnes Pimentel - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/d/0/2/f/d02f229adc0a02369e1ada3173636f4a50135211_cmp8844_1.jpg?imwidth=1024',
      title: 'ENSEMBLE DE LINGERIE ',
      author: 'Emily Makings - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/4/c/9/3/4c93eab60c9fa1c32d24986e35dd810621d6144f_cmp8844_2.jpg?imwidth=1024',
      title: 'ENSEMBLE DE LINGERIE ',
      author: 'Emily Makings - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/3/8/2/0/382078e9f04cfec8a18ec31a3aff8032ee6a578a_cmp8844_3.jpg?imwidth=1024',
      title: 'ENSEMBLE DE LINGERIE ',
      author: 'Emily Makings - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/9/f/e/8/9fe8f50c57d6cba815437e196751ee16086c2eed_cnd1407_1.jpg?imwidth=1024',
      title: 'ENSEMBLE DE LINGERIE ',
      author: 'Lydia Butler - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/a/4/1/9/a419cc4aa2bd5c596f96d4c3e3ea7f76cec67cde_cnd1407_2.jpg?imwidth=1024',
      title: 'ENSEMBLE DE LINGERIE ',
      author: 'Lydia Butler - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/2/7/f/3/27f359359e1678847d4f80c3d39c9081c59d9401_cnd1407_3.jpg?imwidth=1024',
      title: 'ENSEMBLE DE LINGERIE ',
      author: 'Lydia Butler - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/b/9/8/b/b98ba72ef3a413550423cc002becf43844f6f436_cnc8368_1.jpg?imwidth=1024',
      title: 'ENSEMBLE DE LINGERIE ',
      author: 'Lydia Butler - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/8/c/a/3/8ca34ec75774d5bcfcb237257e9cd473f709a1b9_cnc8368_2.jpg?imwidth=1024',
      title: 'ENSEMBLE DE LINGERIE ',
      author: 'Lydia Butler - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/b/1/0/8/b108e39bb6e3e4d2168d3e800d428a777a919b4a_cnc8368_3.jpg?imwidth=1024',
      title: 'ENSEMBLE DE LINGERIE ',
      author: 'Lydia Butler - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/1/1/1/c/111c6879c1eeda39e68ad4e8550de8cccfdfa405_cnc1293_1.jpg?imwidth=1024',
      title: 'ENSEMBLE DE LINGERIE ',
      author: 'Emily Makings - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/9/5/f/e/95fecb4535581a7493a1713bd444812cdbfb8d78_cnc1293_2.jpg?imwidth=1024',
      title: 'ENSEMBLE DE LINGERIE ',
      author: 'Emily Makings - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/3/0/f/a/30fa7561b93ecfb520c24a6fb210ac54590810c2_cnc1293_4.jpg?imwidth=1024',
      title: 'ENSEMBLE DE LINGERIE ',
      author: 'Emily Makings - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/a/7/1/1/a7119100f7b2153f3ff167ba56753e45a5cdef2f_cmy6545_1.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Agnes Pimentel - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/8/c/a/c/8cac57b40a22a005a347bc000b0ef8533d2d456b_cmy6545_2.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Agnes Pimentel - PLT',
    },
    {
      img: 'https://cdn-img.prettylittlething.com/1/0/1/d/101dab371bb41406999ede90a0a26970421c5f29_cmy6545_3.jpg?imwidth=1024',
      title: 'Ensemble lingerie',
      author: 'Agnes Pimentel - PLT',
    },
  ];
