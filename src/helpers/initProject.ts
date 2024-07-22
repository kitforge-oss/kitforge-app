import fs from "fs";
import path from "path";

import {ROOT} from '../constants.js'

interface CreateProjectOptions {
  projectName: string;
  // packages: PkgInstallerMap;
  scopedAppName: string;
  noInstall: boolean;
  importAlias: string;
  appRouter: boolean;
  // databaseProvider: DatabaseProvider;
}

export const createProject = async ({
  projectName,
  scopedAppName,
  packages,
  noInstall,
  appRouter,
  databaseProvider,
}: CreateProjectOptions) => {}