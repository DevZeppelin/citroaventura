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
                'baloon': "url('/baloon.jpg')",  
                'inside': "url('/inside-car.jpg')",  
                'love': "url('/love.jpg')",
                'baloon-m': "url('/baloon-m.jpg')",  
                'inside-m': "url('/inside-car-m.jpg')",  
                'love-m': "url('/love-m.jpg')",
                'us': "url('/us.jpg')"
                                     
               })
        }       
    },
      
    plugins: []
}