#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CwdStack } from '../lib/cwd-stack';

const app = new cdk.App();
new CwdStack(app, 'CwdStack');
