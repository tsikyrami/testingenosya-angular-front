<?php

namespace Doctrine\Bundle\DoctrineBundle\Command\Proxy;

use Doctrine\ORM\Tools\Console\Command\ClearCache\CollectionRegionCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Command to clear a collection cache region.
 */
class CollectionRegionDoctrineCommand extends CollectionRegionCommand
{
    protected function configure(): void
    {
        parent::configure();

        $this
            ->setName('doctrine:cache:clear-collection-region');

        if ($this->getDefinition()->hasOption('em')) {
            return;
        }

        $this->addOption('em', null, InputOption::VALUE_OPTIONAL, 'The entity manager to use for this command');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        DoctrineCommandHelper::setApplicationEntityManager($this->getApplication(), $input->getOption('em'));

        return parent::execute($input, $output);
    }
}
