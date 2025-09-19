
export async function apiFetch<T>(url:string, options:RequestInit = {}) : Promise<T> {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if(!token){
        window.location.replace("/");
    }
    const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };
  const response = await fetch(url, {
    ...options,
    headers,
  });
  if(response.status === 401){
    console.log("token issue", response.statusText);
    window.location.replace("/");
    return Promise.reject(response);
  }
  if(!response.ok){
    throw new Error(response.statusText);
  }
  return await response.json();
}