import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULT_HEADLINE,
  getHeadlineFromUtmContent,
  extractTrackingParams,
  buildCheckoutUrl,
} from './utm.ts';

test('getHeadlineFromUtmContent selects correct dynamic H1', () => {
  // Test AD06
  assert.equal(
    getHeadlineFromUtmContent('ad06'),
    'Liberte-se do açúcar e comece seu reset de 7 dias com a Dra. Mari Ferri'
  );
  assert.equal(
    getHeadlineFromUtmContent('campanha_AD06_video'),
    'Liberte-se do açúcar e comece seu reset de 7 dias com a Dra. Mari Ferri'
  );

  // Test AD07
  assert.equal(
    getHeadlineFromUtmContent('AD07_feed'),
    'Emagreça cuidando da sua saúde e da sua qualidade de vida em 7 dias'
  );

  // Test AD09
  assert.equal(
    getHeadlineFromUtmContent('AD09'),
    'Emagreça junto com a sua família em 7 dias, sem dietas malucas'
  );

  // Test AD02
  assert.equal(
    getHeadlineFromUtmContent('AD02_stories'),
    'Chegou a hora certa de começar o seu reset de 7 dias com a Dra. Mari Ferri'
  );

  // Test AD03
  assert.equal(
    getHeadlineFromUtmContent('AD03'),
    'Um protocolo de 7 dias que cabe na sua rotina real'
  );

  // Test AD08
  assert.equal(
    getHeadlineFromUtmContent('AD08_reels'),
    'Veja os resultados de quem já fez o Magra 7D'
  );

  // Default fallback
  assert.equal(getHeadlineFromUtmContent(''), DEFAULT_HEADLINE);
  assert.equal(getHeadlineFromUtmContent(undefined), DEFAULT_HEADLINE);
  assert.equal(getHeadlineFromUtmContent('outra_coisa'), DEFAULT_HEADLINE);
});

test('extractTrackingParams extracts and appends visitor_id to utm_source', () => {
  const query = '?utm_source=meta&utm_medium=cpc&utm_campaign=magra7d&utm_content=AD06&fbclid=IwAR123';
  const parsed = extractTrackingParams(query, 'v_test123');

  assert.equal(parsed.utm_medium, 'cpc');
  assert.equal(parsed.utm_campaign, 'magra7d');
  assert.equal(parsed.utm_content, 'AD06');
  assert.equal(parsed.fbclid, 'IwAR123');
  assert.equal(parsed.visitor_id, 'v_test123');
  assert.equal(parsed.utm_source, 'meta_v_test123');
});

test('buildCheckoutUrl appends lead data and keeps all tracking params and fbclid', () => {
  const baseUrl = 'https://pay.kiwify.com.br/magra7d';
  const lead = {
    name: 'Ana Silva',
    email: 'ana@example.com',
    whatsapp: '(11) 98765-4321',
  };
  const tracking = {
    utm_source: 'meta_v_test123',
    utm_campaign: 'turma_01',
    utm_content: 'AD06',
    fbclid: 'IwAR_abc',
  };

  const finalUrl = buildCheckoutUrl(baseUrl, lead, tracking);
  const parsed = new URL(finalUrl);

  assert.equal(parsed.searchParams.get('name'), 'Ana Silva');
  assert.equal(parsed.searchParams.get('email'), 'ana@example.com');
  assert.equal(parsed.searchParams.get('phone'), '11987654321');
  assert.equal(parsed.searchParams.get('utm_source'), 'meta_v_test123');
  assert.equal(parsed.searchParams.get('utm_campaign'), 'turma_01');
  assert.equal(parsed.searchParams.get('utm_content'), 'AD06');
  assert.equal(parsed.searchParams.get('fbclid'), 'IwAR_abc');
});
