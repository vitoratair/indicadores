#coding: utf-8

from django.db import models
from django import forms
from django.utils.translation import ugettext_lazy as _

PERCENTUAL = (
    ('1', '0%'),
    ('2', '25%'),
    ('3', '50%'),
    ('4', '75%'),
    ('5', '100%'),
)

class Tarefa(models.Model):
    tarefa = models.CharField(_(u'Nome'), max_length=20, unique=True)
    descricao = models.CharField(_(u'Descrição'), max_length=100, null=True, blank=True)
    percentual = models.CharField(_(u'Percentual'),max_length=20, choices=PERCENTUAL )
    sprintOrigem = models.IntegerField(_(u'Sprint de origem'), null=True, blank=True)
    sprintAtual = models.IntegerField(_(u'Sprint Atual'), null=True, blank=True)
    dataInicio = models.DateField(_(u'Data de Início'), null=True, blank=True)
    dataFim = models.DateField(_(u'Data de término'), null=True, blank=True)
    produto = models.ForeignKey('core.Produto')
    colaborador = models.ForeignKey('core.Colaborador')

    class Meta:
        ordering = ['tarefa']
        verbose_name = _(u'Tarefa')
        verbose_name_plural = _(u'Tarefas')

    def __unicode__(self):
        return self.tarefa