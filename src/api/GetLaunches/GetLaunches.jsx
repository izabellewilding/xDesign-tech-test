// Change below function to API call
export const GetLaunchesAPI = async () => {
  const response = await fetch("https://api.spacexdata.com/v3/launches");
  return await response.json();
};
