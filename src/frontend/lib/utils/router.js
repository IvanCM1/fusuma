const router = () => {
  if (location.search.includes('presenter=host')) return 'host';
  if (location.search.includes('presenter=view')) return 'view';
  return 'common';
};

export default router;
