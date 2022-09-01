import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="flex gap-4">
            <Button>
                <Link to="/supervisor">
                    Stock Supervisor Login
                </Link>
            </Button>
            <Button color="gray">
                <Link to="/store-manager">
                    Stock Manager Login
                </Link>
            </Button>
            <Button color="dark">
                <Link to="/supervisor">
                    FactoryManager Login
                </Link>
            </Button>
        </div>
    </div>
  )
}

export default Home