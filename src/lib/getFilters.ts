import { createClient } from "@/prismicio";

const getFilters = async (device: "iphone", whiteList?: string[]) => {
  const client = createClient();
  const devices = await client.getAllByType(device);

  let filters: { [key: string]: string[] } = {};

  for (const filter in devices[0].data) {
    if (whiteList && !whiteList.includes(filter)) continue;
    filters[filter] = [];
  }

  devices.forEach((device) => {
    for (const filter in filters) {
      filters[filter].push(device.data[filter]);
    }
  });

  return filters;
};

export default getFilters;
