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
                secundary: '#222224'
                
            },
            fontFamily : {
                body : ['Heebo'],
                'righteous' : ['Righteous']
            },
            backgroundImage: theme => ({               
                       
               })
        }       
    },
      
    plugins: []
}