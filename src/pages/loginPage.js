
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
    "https://wdsocdocjxmxuiuqycpp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indkc29jZG9janhteHVpdXF5Y3BwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzNTIyNzUsImV4cCI6MjAyNjkyODI3NX0.TfdC4-VGWzyAkDrKT5nyvGthMf2_cNvbBZDydKY5t8I"
)

function Login() {

    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event === "SIGNED_IN") {
            //forward to success url
            navigate("/success");
        } else if(event === "SIGNED_OUT") {
            //forward to localhost:3000
            navigate("/");
        }
    })

  return (
    <div className="App">
      <header className="App-header">
        <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme='dark'
            providers={["discord", "google"]}
        />
      </header>
    </div>
  );
}

export default Login;
