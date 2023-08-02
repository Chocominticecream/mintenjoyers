import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'YourDesiredFont, sans-serif', // Replace 'YourDesiredFont' with the font you want to use
    },
});

// Wrap your app with the ThemeProvider to apply the custom typography
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            {/* Your app components */}
        </ThemeProvider>
    );
};