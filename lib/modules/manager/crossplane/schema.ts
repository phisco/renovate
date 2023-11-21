import { z } from 'zod';

const XPKG = z.object({
  "apiVersion": z.string().regex(/^pkg.crossplane.io\//),
  "kind": z.enum(["Provider", "Configuration", "Function"]),
  "spec": z.object({
    "package": z.string(),
  }),
});

export type XPKG = z.infer<typeof XPKG>;
