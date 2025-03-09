export async function getData() {
    try {
      const url = `${process.env.HOST_API}/api/cities`;
  
      const res = await fetch(url, {
        method: 'GET',
        cache: 'no-cache',
      });
  
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }