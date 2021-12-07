module.exports = {
    purge: false,
    theme: {
        screens: {
            'xs' : '320px',
            'sm' : '360px',
            'md': '850px',
        },
        extend: {
            colors : {
                primary : '#0D0D0D',
                secundary: '#222224',
                citrorange: '#f14b23'
                
            },
            fontFamily : {
                body : ['Heebo'],
                'righteous' : ['Righteous'],
                'readex': ['Readex Pro']
            },
            backgroundImage: theme => ({               
                'baloon': "url('/baloon.webp')",  
                'inside': "url('/inside-car.webp')",  
                'love': "url('/love.webp')",
                'baloon-m': "url('/baloon-m.webp')",  
                'inside-m': "url('/inside-car-m.webp')",  
                'love-m': "url('/love-m.webp')",
                'us': "url('/us.webp')"
                                     
               })
        }       
    },
      
    plugins: []
}